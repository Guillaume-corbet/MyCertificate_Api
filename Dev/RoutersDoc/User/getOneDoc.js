/**
 * @openapi
 * /v1/user/{userUuid}:
 *  get:
 *    tags:
 *      - User
 *    description: Récupérer les informations d'un utilisateur
 *    parameters:
 *      - in: header
 *        name: token
 *        required: true
 *        schema:
 *          type: string
 *        example: Bearer token
 *      - in: path
 *        name: userUuid
 *        required: true
 *        schema:
 *          type: string
 *        example: 1
 *    responses:
 *      201:
 *        description: Utilisateur récupéré avec succés
 *        schema:
 *          type: object
 *          properties:
 *            user:
 *              type: "object"
 *              properties:
 *                uuid:
 *                  type: string
 *                username:
 *                  type: string
 *                type:
 *                  type: object
 *                  properties:
 *                    uuid:
 *                      type: string
 *                    name:
 *                      type: string
 *                enable:
 *                  type: boolean
 *      401:
 *        description: Erreur lors du login
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: "string"
 */