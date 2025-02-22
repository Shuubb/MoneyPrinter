const express = require("express");
const { Builder, By, until } = require("selenium-webdriver");

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
    let driver;
    try {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://example.com");

        // Example: Get the page title
        let title = await driver.getTitle();

        res.json({ title });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        if (driver) {
            await driver.quit();
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
