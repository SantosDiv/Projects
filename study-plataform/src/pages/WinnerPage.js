import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { string } from 'prop-types';
import Footer from '../components/Footer';
import winnerImg from '../img/winners.svg';
import '../css/WinnerPage.css';
import { connect } from 'react-redux';

class WinnerPage extends React.Component {
  constructor(props) {
    super(props);

    this.getCourses = this.getCourses.bind(this);
    this.setPointsInLocalStorage = this.setPointsInLocalStorage.bind(this);

    this.state = {
      refresh: false,
      pointsTotal: 0,
      points: 0,
    }
  }

  componentDidMount() {
    this.getCourses();
  }

  setPointsInLocalStorage(points) {
    const pointsTotal = Number(localStorage.getItem('points')) + points;
    localStorage.setItem('points', pointsTotal);
    this.setState({
      pointsTotal,
    });
  }

  getCourses() {
    const { courses, match: { params: { session } } } = this.props;
    if (!courses.length) return this.setState({ refresh: true });

    const courseCompleted = courses.find((course) => course.name === session);
    this.setState({
      points: courseCompleted.points,
    });
    this.setPointsInLocalStorage(courseCompleted.points);
  }

  render() {
    const { match: { params: { session } } } = this.props;
    const { refresh, points, pointsTotal } = this.state;
    if (refresh) return <Redirect to="/dashboard" />
    return (
      <React.Fragment>
        <header className="header-page-winner">
          <Link to="/Dashboard" className="color-primary">
            <span class="fas fa-arrow-left"></span>
          </Link>
          <p className="text-medium color-primary">{pointsTotal} xp</p>
        </header>
        <section className="section-winner-feedback">
          <h3 className="text-big color-primary">You Win</h3>
          <img
            src= { winnerImg }
            alt="Ilustração de um troféu com pessoas comemorando a vitória"
          />
          <p className="text-medium light-weight color-primary">{ session }</p>
          <p className="text-medium bold color-primary">Concluído</p>
          <h1 className="text-big-2x color-secondary light-weight points">{`+${points}XP`}</h1>
          <p className="text-small color-primary">Parabéns você merece</p>

          <Link to="/dashboard">
            <button
              type="button"
              className="course-navigation-button text-medium button-back-home"
            >
              Início
            </button>
          </Link>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

WinnerPage.propTypes = {
  session: string.isRequired,
}

const mapStateToProps = (state) => ({
  courses: state.coursesReducer.courses,
});

export default connect(mapStateToProps)(WinnerPage);