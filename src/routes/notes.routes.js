const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

function myMiddleware(request, response, next) {
    // console.log("Você passou pelo Middleware!");
    
    // if (!request.body.isAdmin) {
    //     return response.json({ message: "user unauthorized" });
    // }

    next();
}

const notesController = new NotesController();

notesRoutes.post("/:user_id", myMiddleware, NotesController.create);

module.exports = notesRoutes;