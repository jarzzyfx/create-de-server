"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.START = void 0;
// This file will be used to start up our server by ensuring that we have the database connected
const START = ({ app, port }) => {
    const x = 2;
    const y = 1;
    try {
        // login to database
        const xy = x + y;
        // if successful
        if (xy === 3) {
            app.listen(port, () => {
                console.log(`Server is Listening on host [ http://localhost:${port}... ]`, "Enjoy your coding from EMEKA SERVER...");
            });
        }
        else {
            return Error("Error from starting Server");
        }
    }
    catch (error) {
        //if failed
        console.error({
            DE_status: "Failed",
            DE_flag: "Error from starting Server",
            DE_ref_points: "Database Connection || Server processes",
            DE_Err: error,
        });
    }
};
exports.START = START;
