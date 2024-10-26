import { Books } from "./src/app/class/books.class";
import { Students } from "./src/app/class/students.class";
import { UniversityLibrary } from "./src/app/class/university.class";
import { ViewConsole } from "./src/app/view/console/view";

class Application {
  static main(): void {
    const view = new ViewConsole(new Books, new Students);
    view.showMenu();
    view.selectedOption();
    view.processSelectedOption();
  }
}

Application.main();