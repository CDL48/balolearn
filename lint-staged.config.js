export default {
    "*.{ts,tsx,json}": (stagedFiles) => {
        return [
            `eslint --fix --max-warnings=1 ${stagedFiles.join(" ")}`,
            `prettier --write ${stagedFiles.join(" ")}`,
        ];
    },
    "**/*.ts?(x)": () => "tsc --project tsconfig.json",
};
