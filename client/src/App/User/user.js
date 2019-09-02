import React from "react";

export default class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      error: {}
    };

    this.get_users = this.get_users.bind(this);
  }

  componentDidMount() {
    this.get_users();
  }

  get_users() {
    const promise = fetch("/api/users", {
      method: "GET",
      mode: "same-origin",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    });

    promise
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        this.setState({ error: { response: "The response was not OK" } });
      })
      .then(users => {
        if (users) {
          this.setState({ users });
        }
      })
      .catch(error => this.setState({ error: { message: error.message } }));
  }

  render() {
    return (
      <div>
        {this.state.users.length ? (
          <ol>
            {this.state.users.map(user => {
              return <li key={user.id}>{user.name}</li>;
            })}
          </ol>
        ) : (
          <h6>No hay nada</h6>
        )}
      </div>
    );
  }
}
