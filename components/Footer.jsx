import { Button } from "@nextui-org/button";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          <p className="text-sm font-light">
            Créé par{" "}
            <a
              href="https://twitter.com/tTmoas"
              target="_blank"
              className="font-medium"
            >
              Toma
            </a>{" "}
            pour la WSF
          </p>
          <a href="https://github.com/TomaTV" target="_blank">
            <Button isIconOnly variant="light">
              <Github size={24} />
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
