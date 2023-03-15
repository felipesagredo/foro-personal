import React from 'react';
import Feed from './Feed';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      filteredStories: [],
    };
  }

  handleInputChange = (event) => {
    const searchTerm = event.target.value;
    const filteredStories = this.props.stories.filter(story => (
      story.description.includes(searchTerm) || story.user.includes(searchTerm)
    ));

    this.setState({
      searchTerm,
      filteredStories,
    });
  }

  render() {
    const stories = this.state.filteredStories.length > 0 ?
      this.state.filteredStories :
      this.props.stories;

    return (
      <div>
        <form>
          <input type="text" placeholder="Buscar historias" value={this.state.searchTerm} onChange={this.handleInputChange} />
        </form>
        <Feed stories={stories} />
      </div>
    );
  }
}

export default Search;
