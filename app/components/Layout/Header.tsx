import { CartBag } from '@app/components/CartBag/CartBag';
import { NavBar } from './NavBar/NavBar';
import { Login } from '@app/components/Login/Login';
import testIds from '@app/utils/test-ids';

const Header = () => (
  <>
    <header
      className="h-header z-40 w-full"
      data-testid={testIds.LAYOUT.HEADER}
    >
      <div className="flex px-6 sm:px-14 h-header items-center gap-4 sm:gap-8">
        <h2 className="flex-1">
          <a href="/">TALI$A KIDD</a>
        </h2>
        <Image
          src="https://static.wixstatic.com/media/c22c23_14f3a617cd684341b51dd1a3962c856e~mv2.png/v1/fill/w_202,h_245,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_14f3a617cd684341b51dd1a3962c856e~mv2.png"
          alt="TALI$A"
          width={202}
          height={245}
        />
        <div>
          <Login />
        </div>

        <div>
          <CartBag />
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  </>
);

export default Header;
