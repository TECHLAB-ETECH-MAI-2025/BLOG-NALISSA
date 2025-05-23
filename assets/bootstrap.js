// ./assets/bootstrap.js

import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

// Démarre l’application Stimulus
const application = Application.start();

// Charge automatiquement tous les contrôleurs Stimulus dans le dossier ./controllers
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
