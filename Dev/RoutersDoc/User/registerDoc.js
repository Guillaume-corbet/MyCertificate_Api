/**
 * @openapi
 * /v1/user/:
 *  post:
 *    tags:
 *      - User
 *    description: Register un nouvel utilisateur
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              username:
 *                type: string
 *            required:
 *              - email
 *              - password
 *              - username
 *          example:
 *            email: guillaume.corbet@epitech.eu
 *            password: Password13!
 *            username: guikouse
 *    responses:
 *      201:
 *        description: Utilisateur créé avec succés
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *      401:
 *        description: Erreur lors du register
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 */