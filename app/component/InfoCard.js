// app/component/InfoCard.js
import '../globals.css';
import BlogPost from './BlogPost';
import Board from './Board';

const InfoCard = () => {
    const cards = [
        { title: "정보보호", content: "내용1" },
        { title: "정보보호", content: "내용2" },
        { title: "정보보호", content: "내용3" },
        { title: "정보보호", content: "내용4" }
    ];

    const posts = [
        { title: "블로그제목1", content: "블로그내용1" },
        { title: "블로그제목2", content: "블로그내용2" },
    ];
    const boardPosts = [
        { title: "게시글제목1", content: "게시글내용1" },
        { title: "게시글제목2", content: "게시글내용2" },
    ];
    return (
        <div>
            <div className="info-card-container">
                {cards.map((card, index) => (
                    <div className="info-card" key={index}>
                        <h2>{card.title}</h2>
                        <p>{card.content}</p>
                    </div>
                ))}
            </div>
            <div className="blog-post-container">
                {posts.map((post, index) => (
                    <BlogPost title={post.title} content={post.content} key={index} />
                ))}
            </div>
            <div className="board-container">
                <Board posts={boardPosts} />
            </div>
        </div>
    );
};

export default InfoCard;
