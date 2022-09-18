import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        return next()
    }

    const extratectErros: object[] = []
    errors.array().map((err) => extratectErros.push({ [err.param]: err.msg }))

    return res.status(422).json({
        errors: extratectErros,
    })
}