exports.index = (req, res) => {
    res.sendFile(`${process.cwd()}/views/index.html`);
};

exports.about = (req, res) => {
    res.sendFile(`${process.cwd()}/views/about.html`);
};