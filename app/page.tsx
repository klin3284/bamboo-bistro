import Image from "next/image";
import { Box } from "@mui/material";
import "./css/menu.css";

export default function Home() {
  return (
    <Box>
      <div
        style={{
          paddingTop: 20,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            backgroundImage: "url('./bamboo.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginRight: "auto", // pushes the box to the far left
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 50,
            fontWeight: 700,
          }}
        >
          Bamboo Bistro
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          textAlign: "center",
          fontSize: 18,
          fontWeight: 200,
        }}
      >
        Welcome to 2024&rsquo;s Best Voted Restaurant in Boston
      </div>

      <div className="itemName">Okonomiyaki Pancake</div>
      <div className="itemDescription">
        A savory Japanese pancake loaded with cabbage, tempura flakes, and scallions. Topped with
       okonomiyaki sauce.
      </div>

      <div className="itemName">
        Cantonese-style Dungeness Crab Steamed Sticky Rice
      </div>
      <div className="itemDescription">
        Fresh and locally sourced Dungeness crab stir-fried with garlic, ginger, and scallions. Steamed with glutinous rice.
      </div>

      <div className="itemName">Kenbu Miso Glazed Cod</div>
      <div className="itemDescription">
        Tender cod fillets marinated in a blend of white miso paste, mirin, and
        sugar. Grilled until perfectly caramelized.
      </div>

      <div className="itemName">Garlic Pea Shoots</div>
      <div className="itemDescription">
        Fresh pea shoots stir-fried with garlic and a touch of soy sauce.
      </div>

      <div className="itemName">Garlic Pea Shoots</div>
      <div className="itemDescription">
        Fresh pea shoots stir-fried with garlic and a touch of soy sauce.
      </div>

      <footer>
        <div className="itemDescription" style={{paddingBottom: 15}}>Chef de Cuisine Kenny Lin&emsp;Property Manager Angel Yang</div>
        <div className="footer-content">
          <p>© 2024 Bamboo Bistro</p>
          <ul className="footer-menu">
            <li>
              <a href="https://asianamericancenter.northeastern.edu/">About Us</a>
            </li>
            <li>
              <a href="./">Menu</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/kennylin24/">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </Box>
  );
}
