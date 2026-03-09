/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Fizetés és jegyvásárlás
 */

/**
 * @swagger
 * /api/payment:
 *   post:
 *     summary: Fizetési művelet (create / price / confirm)
 *     tags: [Payment]
 *     parameters:
 *       - in: query
 *         name: action
 *         required: true
 *         schema:
 *           type: string
 *           enum: [create, price, confirm]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             seatIds: ["chair1","chair2"]
 *             ticketTypes: ["Normál","Diák"]
 *     responses:
 *       200:
 *         description: Sikeres művelet
 *       400:
 *         description: Hibás kérés
 *       401:
 *         description: Nincs bejelentkezve
 *       500:
 *         description: Szerver hiba
 */

/**
 * @swagger
 * /api/payment:
 *   get:
 *     summary: Fizetési session lekérése
 *     tags: [Payment]
 *     parameters:
 *       - in: query
 *         name: action
 *         required: true
 *         schema:
 *           type: string
 *           enum: [session]
 *     responses:
 *       200:
 *         description: Session adatok
 *         content:
 *           application/json:
 *             example:
 *               sessionId: "abc123"
 *               movieTitle: "Interstellar"
 *               hallName: "Terem 1"
 *               start: "2026-03-10T18:00:00Z"
 *               screeningType: "2D"
 *               seats:
 *                 - row: 3
 *                   column: 5
 *                 - row: 3
 *                   column: 6
 *               ticketTypes:
 *                 - type: "Normál"
 *                   percent: 100
 *               totalPrice: 1200
 *       400:
 *         description: Érvénytelen session
 *       500:
 *         description: Szerver hiba
 */

/**
 * @swagger
 * /api/payment/checkout:
 *   post:
 *     summary: Stripe fizetés indítása
 *     tags: [Payment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             ticketTypes: ["Normál","Diák"]
 *     responses:
 *       200:
 *         description: Stripe checkout URL
 *         content:
 *           application/json:
 *             example:
 *               url: "https://checkout.stripe.com/session/abc123"
 *       500:
 *         description: Stripe hiba
 */