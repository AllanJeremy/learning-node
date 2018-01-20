const printer = require("./playground/modules/test_module");

printer.printHello("Damien");
printer.hated = "Something I hate";
printer.printHate(printer.hated);