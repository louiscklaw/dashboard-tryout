import React from 'react';

export default () => {
  var [post_test_json, setPostTestJson] = React.useState({});
  var [last_update, setLastUpdate] = React.useState('');

  var [vba_post_check_result, setVbaPostCheckResult] = React.useState('');
  var [coding_post_check_result, setCodingPostCheckResult] = React.useState('');
  var [programming_post_check_result, setProgrammingingPostCheckResult] = React.useState('');
  var [javascript_post_check_result, setJavascriptPostCheckResult] = React.useState('');
  var [python_post_check_result, setPythonPostCheckResult] = React.useState('');
  var [tableau_post_check_result, setTableauPostCheckResult] = React.useState('');
  var [wordpress_post_check_result, setWordpressPostCheckResult] = React.useState('');

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/louiscklaw/carousell-monitor-playlist/gh-pages/post_test_result.json')
      .then(res => res.text())
      .then(res_text => JSON.parse(res_text))
      .then(res_json => {
        setPostTestJson(res_json);

        var { result } = res_json;

        setLastUpdate(result.last_update);
        setVbaPostCheckResult(result.vba_post_check);
        setCodingPostCheckResult(result.coding_post_check);
        setProgrammingingPostCheckResult(result.programming_post_check);
        setJavascriptPostCheckResult(result.javascript_post_check);
        setPythonPostCheckResult(result.python_post_check);
        setTableauPostCheckResult(result.tableau_post_check || 'NOT_FOUND');
        setWordpressPostCheckResult(result.wordpress_post_check || 'NOT_FOUND');
      })

      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div style={{ minWidth: '8rem', maxWidth: '10vw', padding: '0 0.1rem' }}>
        <div style={{ fontSize: '0.75rem' }}>
          <div>{last_update}</div>

          <div style={{ color: 'white', backgroundColor: coding_post_check_result == 'OK' ? 'green' : 'red' }}>
            coding:{coding_post_check_result}
          </div>

          <div style={{ color: 'white', backgroundColor: vba_post_check_result == 'OK' ? 'green' : 'red' }}>
            vba:{vba_post_check_result}
          </div>

          <div style={{ color: 'white', backgroundColor: programming_post_check_result == 'OK' ? 'green' : 'red' }}>
            programming:{programming_post_check_result}
          </div>

          <div style={{ color: 'white', backgroundColor: javascript_post_check_result == 'OK' ? 'green' : 'red' }}>
            javascript:{javascript_post_check_result}
          </div>

          <div style={{ color: 'white', backgroundColor: python_post_check_result == 'OK' ? 'green' : 'red' }}>
            python:{python_post_check_result}
          </div>

          <div style={{ color: 'white', backgroundColor: tableau_post_check_result == 'OK' ? 'green' : 'red' }}>
            tableau:{tableau_post_check_result}
          </div>

          <div style={{ color: 'white', backgroundColor: wordpress_post_check_result == 'OK' ? 'green' : 'red' }}>
            wordpress:{wordpress_post_check_result}
          </div>

          <div>
            <a href="https://changedetect.iamon99.com/?tag=carousell%2Fsearch" target="_blank">
              changedetect
            </a>
          </div>

          <div>
            <a href="https://github.com/louiscklaw/carousell-monitor-playlist" target="_blank">
              source
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
