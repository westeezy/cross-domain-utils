export {};

// @ts-ignore karma doesnt exist on console natively
window.console.karma = (...args) => {
    // @ts-ignore karma doesnt exist on window natively
    const karma = window.karma || (window.top && window.top.karma) || (window.opener && window.opener.karma);
    karma.log('debug', ...args);
    // eslint-disable-next-line no-console
    console.log.apply(console, args);
};
