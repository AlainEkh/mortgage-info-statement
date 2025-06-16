import * as cheerio from 'cheerio';

/**
 * Parses HTML content and extracts data for the information statement.
 *  * @param {string} html The full HTML content of the saved mortgage page.
 * @returns {object} An object with the extracted information.
 */

export function parseMortgageHtml (html) {
    const $ = cheerio.load(html); // Load HTML like jQuery

    // Sample : Extract loan ID using data-testid attribute
    const loanId = $('span[data-testid="loanPanel-loanId"]').text().trim();

    return{
        loanId,
    }
}