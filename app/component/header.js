// app/component/Header.js
import Link from 'next/link';
import '../globals.css';

const Header = () => {
    return (
        <nav className="header">
            {/* 로고 */}
            <div className="logo">
                <Link href="/"><span>로고 넣으세요</span></Link>
            </div>

            {/* 네비게이션 링크 */}
            <div className="navigation">
                <Link href="/"><span>{"홈 테 스 트"}</span></Link>
                <Link href="/hoho"><span>{"테 스 트 1"}</span></Link>
                <Link href="/services"><span>{"테 스 트 2"}</span></Link>
                <Link href="/contact"><span>{"연 락 처"}</span></Link>
            </div>

            {/* 검색 바 */}
            <div className="search">
                <input type="text" placeholder="검색..." />
            </div>

            {/* 로그인/로그아웃 버튼 */}
            <div className="auth">
                <Link href="/login"><span>{"로그인"}</span></Link>
                <Link href="/logout"><span>{"로그아웃"}</span></Link>
            </div>

        </nav>

    );
};

export default Header;
