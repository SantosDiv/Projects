import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import actionChangeStatusChapter from '../actions/actionChangeStatusChapter';
import winnerImg from '../img/winners.svg';
import '../css/WinnerPage.css';

class WinnerPage extends React.Component {
  constructor(props) {
    super(props);

    this.filterCourseSelected = this.filterCourseSelected.bind(this);
    this.setPointsInLocalStorage = this.setPointsInLocalStorage.bind(this);
    this.getPointsInLocalStorage = this.getPointsInLocalStorage.bind(this);

    this.state = {
      refresh: false,
      pointsTotal: 0,
      message: '',
    }
  }

  componentDidMount() {
    this.filterCourseSelected();
  }

  setPointsInLocalStorage(points) {
    const pointsTotal = Number(localStorage.getItem('points')) + points;
    localStorage.setItem('points', pointsTotal);
    this.setState({
      pointsTotal,
    });
  }

  getPointsInLocalStorage() {
    this.setState({
      pointsTotal: localStorage.getItem('points'),
      message: 'Finalizado!'
    });
  }

  filterCourseSelected() {
    const {
      courses,
      match: { params: { session, chapter } },
      propChangeStatusChapter
    } = this.props;

    if (!courses.length) return this.setState({ refresh: true });
    const sessionSelected = courses.find((course) => course.name === session);
    const chapterContent = sessionSelected.contents
      .find(({ title }) => title === chapter);
    if (!chapterContent.chapterCompleted) {
      chapterContent.chapterCompleted = true;
      this.setState({
        message: `+${chapterContent.points}XP`,
      });
      this.setPointsInLocalStorage(chapterContent.points);
      propChangeStatusChapter(courses);
    } else {
      this.getPointsInLocalStorage();
    }
  }

  render() {
    const { match: { params: { chapter } }} = this.props;
    const { refresh, pointsTotal, message } = this.state;
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
          <p className="text-medium light-weight color-primary">{ chapter }</p>
          <p className="text-medium bold color-primary">Concluído</p>
          <h1 className="text-big-2x color-secondary light-weight points">
            { message }
          </h1>
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

const mapStateToProps = ({ coursesReducer }) => ({
  courses: coursesReducer.courses,
  propChaptersCompleted: coursesReducer.chaptersCompleted,

});

const mapDispatchToProps = {
  propChangeStatusChapter: actionChangeStatusChapter,
}

export default connect(mapStateToProps, mapDispatchToProps)(WinnerPage);