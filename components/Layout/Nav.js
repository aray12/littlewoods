import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <Link href="/">
        <button>LEADERBOARD</button>
      </Link>
      <Link href="/tournament">
        <button>TOURNAMENT</button>
      </Link>

      <style jsx>{`
        div {
          margin: 20px -5px;
        }

        button {
          width: calc(50% - 10px);
          margin: 0 5px;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default Nav;
