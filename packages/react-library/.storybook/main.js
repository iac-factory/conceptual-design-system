module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: [
        "./addon-panel/register",
        "./addon-tab/register",
        "./addon-toolbar/register",
        '@storybook/preset-scss',
        "@storybook/addon-links",
        {
            name: '@storybook/addon-essentials',
            options: {
                actions: true,
                backgrounds: true,
                controls: true,
                docs: true,
                viewport: true,
                toolbars: true
            }
        },
    ]
};
