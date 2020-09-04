exports.index = (req, res) => {
    // Render gère le chemin tout seul, pas besoin de ${process.cwd()}
    res.render("pages/index", {
        title: "Titre propre à Index",
        name: "Bertrand",
        showCircle: true
    });
};

exports.about = (req, res) => {
    res.render("pages/about", {
        title: "Titre propre à About",
        name: "Bertrand",
        showCircle: false
    });
};