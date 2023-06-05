import Link from "next/link";
import Container from "./container";

const Header = () => {
  return (
    <div className="bg-musing-green py-8 mb-8">
      <Container>
        <h2 className="text-2xl text-musing-yellow md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link
            href="/"
            className="hover:text-white transition-colors duration-200 border-b-4 border-transparent hover:border-white group"
          >
            <span className="text-musing-orange group-hover:text-white transition-colors">
              Musing
            </span>{" "}
            and Grumbling.
          </Link>
        </h2>
      </Container>
    </div>
  );
};

export default Header;
