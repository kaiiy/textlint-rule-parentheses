import TextLintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        // no problem
        "text",
        {
            text: "It is bugs, but it should be ignored",
            options: {
                allows: ["it should be ignored"]
            }
        },
    ],
    invalid: [
        // single match
        {
            text: "It is bugs.",
            errors: [
                {
                    message: "Found bugs.",
                    range: [6, 10]
                }
            ],
            output: "It is fixed."
        },
        // multiple match
        {
            text: "It has many bugs. One more bugs",
            errors: [
                {
                    range: [12, 16]
                },
                {
                    range: [27, 31]
                }
            ],
        },

    ]
});
