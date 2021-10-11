import { useRef, useState, useEffect } from 'react';

function SearchInput({ validateInput, error }) {
  const keywordRef = useRef();
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    keywordRef.current.focus();
  }, []);

  const handleClick = (keyword) => {
    validateInput(keyword);
    setKeyword('');
    keywordRef.current.value = '';
    keywordRef.current.focus();
  };

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      handleClick(keyword);
    }
  };

  return (
    <div className="col-12 col-sm-10 col-md-6 col-lg-4 m-auto mb-4">
      {!!error ? <div className="text-center text-danger h-20">{error}</div> : <div className="h-20"></div>}
      <div className="input-group my-3 outline-none">
        <input
          ref={keywordRef}
          onChange={() => setKeyword(keywordRef.current.value.trim())}
          onKeyPress={handleKeypress}
          type="text"
          className="form-control outline-none"
          placeholder="Enter keyword"
          aria-label="Enter keyword"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-dark outline-none" type="button" onClick={() => handleClick(keyword)}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
