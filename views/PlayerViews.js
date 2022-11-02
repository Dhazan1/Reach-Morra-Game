import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetFinger = class extends React.Component {
  render() {
    const {parent, playable, finger} = this.props;
    return (
      <div class="buttons-holder">
        {finger ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('ZERO')}
        >No Finger</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('ONE')}
        >One Finger</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('TWO')}
        >Two Finger</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('THREE')}
        >Three Finger</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('FOUR')}
        >Four Finger</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('FIVE')}
        >Five Finger</button>
      </div>
    );
  }
}

exports.GetGuess = class extends React.Component {
  render() {
    const {parent, playable, guess} = this.props;
    return (
      <div class="buttons-holder">
        {guess ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('GUESS0')}
        >Guess Zero</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('GUESS1')}
        >Guess One</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('GUESS2')}
        >Guess Two</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('GUESS3')}
        >Guess Three</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('GUESS4')}
        >Guess Four</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('GUESS5')}
        >Guess Five</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('GUESS6')}
        >Guess Six</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('GUESS7')}
        >Guess Seven</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('GUESS8')}
        >Guess Eight</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('GUESS9')}
        >Guess Nine</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('GUESS10')}
        >Guess Ten</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;