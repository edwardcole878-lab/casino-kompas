import { UserCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function AuthorByline() {
  return (
    <div className="flex items-center gap-3 rounded-xl border bg-card/60 p-3 shadow-soft">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold/30 to-trust/20 text-foreground">
        <UserCircle2 className="h-7 w-7" />
      </span>
      <div className="min-w-0 text-sm">
        <div className="font-semibold">
          Geschreven door{" "}
          <Link to="/redactiebeleid" className="text-trust underline-offset-2 hover:underline">
            Mark de Vries
          </Link>
        </div>
        <div className="text-xs text-muted-foreground">
          8 jaar ervaring in de Nederlandse gokmarkt · onafhankelijk getest met eigen geld
        </div>
      </div>
    </div>
  );
}