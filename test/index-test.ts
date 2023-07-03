import TextLintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        "（",
        "text",
        "）"
    ],
    invalid: [
        {
            text: "(",
            errors: [
                {
                    range: [0, 1]
                }
            ],
            output: "（"
        },
        {
            text: ")",
            errors: [
                {
                    range: [0, 1]
                }
            ],
            output: "）"
        },
        {
            text: "９     (",
            errors: [
                {
                    range: [1, 7]
                }
            ],
            output: "９（"
        },
        {
            text: ")    ま",
            errors: [
                {
                    range: [0, 5]
                }
            ],
            output: "）ま"
        },
        {
            text: "()((",
            errors: [
                {
                    range: [0, 1]
                },
                {
                    range: [1, 2]
                },
                {
                    range: [2, 3]
                },
                {
                    range: [3, 4]
                }
            ],
            output: "（）（（"
        },
        {
            text: "s   (tex   t )  s",
            output: "s（tex   t ）s",
            errors: [
                {
                    range: [1, 5]
                },
                {
                    range: [13, 16]
                }
            ],
        },

    ]
});
