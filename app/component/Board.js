// app/component/Board.js
import '../globals.css';

const Board = ({ posts }) => {
    return (
        <div className="board">
            <h2>게시판</h2>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                            <td>{post.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Board;
