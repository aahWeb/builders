import { hello } from "./utils.js";
import './styles.scss';

let container = document.getElementById("message");
container.innerHTML = hello()