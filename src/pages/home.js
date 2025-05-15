
import Header from "./../components/hedear/Header";
import info01 from './../img/1.jpg';
import info02 from './../img/2.jpg';
import info03 from './../img/3.jpg';
const Home = () => {
    return ( 
    <>
        <Header/>

        <div className="info">
            <div className="conteiner">
                <div className="info-item">
                    <div className="info-card-one">
                        <div className="rectangle2">
                            <img src={info03} alt="" />
                        </div>
                        <h2>info</h2>
                    </div>
                    <div className="info-card-one">
                        <h2>info</h2>
                        <div className="compact"> 
                            <div className="rectangle3">
                                <img src={info01} alt="" />
                            </div>
                            <div className="rectangle3">
                                <img src={info02} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
     );
}
 
export default Home;