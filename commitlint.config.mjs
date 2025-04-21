// commitlint 的配置文件，用于检查 Git commit 信息是否符合规范
// 当执行 git commit 时，husky 会触发 .husky/commit-msg 钩子
// 该钩子中通常会调用 commitlint，例如：npx --no -- commitlint --edit $1
// commitlint 执行时会自动读取 commitlint.config.mjs 配置文件
// 用来检查提交信息是否符合规则（如 conventional commits）
export default { extends: ['@commitlint/config-conventional'] };
