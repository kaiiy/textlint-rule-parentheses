import type { TextlintRuleModule } from "@textlint/types";

export interface Options {
    // If node's text includes allowed text, does not report.
    allows?: string[];
}

const replaceTxt = (text: string) => {
    const trimmed = text.trim()
    if (trimmed === "(") return "（"
    else if (trimmed === ")") return "）"
    else throw new Error("Unexpected string")
}

const reporter: TextlintRuleModule<Options> = (context, options = {}) => {
    const { Syntax, RuleError, fixer, report, getSource, locator } = context;
    const allows = options.allows ?? [];
    return {
        [Syntax.Str](node) { // "Str" node
            const text = getSource(node); // Get text
            if (allows.some(allow => text.includes(allow))) return;

            const matches = text.matchAll(/(?:\s*\()|(?:\)\s*)/g);
            for (const match of matches) {
                const index = match.index ?? 0;
                const text = match[0]
                const matchRange = [index, index + text.length] as const;

                const replacer = fixer.replaceTextRange(
                    matchRange, replaceTxt(text))
                const ruleError = new RuleError("括弧は半角ではなく、全角を使用してください。", {
                    padding: locator.range(matchRange),
                    fix: replacer
                });
                report(node, ruleError);
            }
        }
    }
};

export default {
    linter: reporter,
    fixer: reporter
}
