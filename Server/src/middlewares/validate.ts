
import { ZodError } from "zod/v3";

const validate = (schema) => async(req, res, next) => {
    try {
        
        await schema.parseAsync({
          body: req.body,
          query: req.query,
          params: req.params,
        });

        return next();
        
    } catch (error) {
        if (error instanceof ZodError) {
          return res.status(400).json({
            success: false,
            message: "Validation Error",
            // Zod returns an array of errors
            errors: error.errors.map(err => ({
              field: err.path[1], // e.g., 'email' or 'password'
              message: err.message
            }))
          });
        }

        console.log("here" , error)
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export default validate