"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: "API está en api/index" });
    }
}
exports.indexController = new IndexController();
