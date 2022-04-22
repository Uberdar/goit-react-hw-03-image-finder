import { Component } from 'react';
import { Flip, ToastContainer } from 'react-toastify';
import SearchForm from './SearchForm/SearchForm';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMore from './Button/Button';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    pictureName: '',
    page: 1,
    showmodal: false,
    src: '',
  };
  toggleModal = e => {
    console.log('e: ', e['target'].dataset.test);
    let x = e['target'].dataset.test;
    this.setState({
      showmodal: !this.state.showmodal,
      src: x,
    });
  };
  toggleModalCL = () => {
    this.setState({
      showmodal: !this.state.showmodal,
    });
  };
  handleFormSubmit = pictureName => {
    // console.log('pictureName: ', pictureName);
    this.setState({
      pictureName,
    });
  };
  addNewPages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    console.log(this.state.addPages);
    return (
      <div>
        <SearchForm whenSubmit={this.handleFormSubmit} />
        <ImageGallery
          pictureName={this.state.pictureName}
          page={this.state.page}
          toggleModal={this.toggleModal}
        />
        <LoadMore newPages={this.addNewPages} />
        {this.state.showmodal ? (
          <Modal imgSrc={this.state.src} onClose={this.toggleModalCL} />
        ) : null}
        <ToastContainer autoClose={3000} theme={'colored'} transition={Flip} />
      </div>
    );
  }
}
