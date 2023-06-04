import Link from "next/link";
import { BLOG_NAME } from "../lib/constants";
import Container from "./container";

const Header = () => {
  return (
    <div className="bg-musing-green py-8 mb-8">
      <Container>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/" className="hover:underline">
            {BLOG_NAME}
          </Link>
          .
        </h2>
      </Container>
    </div>
  );
};

export default Header;
