import React from 'react'
import Relay from 'react-relay'
import User from './User'
import Repo from './Repo'

// Normal React Component that renders the the data passed by the Relay Container
class DumbComponent extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.term && this.props.term !== ""
          ? this.props.user.search.edges.length > 0
            ? this.props.user.search.edges.map((node, index) => {
              if(node.node.login === this.props.term){
                return (
                    <div>
                      <User key={index} user={node.node} />
                      <hr />
                      {
                        node.node.repositories.edges.map((repo, subIndex) => {
                          const ind = `repo${subIndex}`;
                          return (
                            <Repo key={`${ind}`} owner={node.node} repo={repo.node} />
                          )
                        })
                      }
                    </div>
                )
              } else {
                return <h4 key={index}>No user found</h4>;
              }
            })
            : <div><h4>No User By that Name</h4></div>
          : <div></div>
        }
      </div>
    )
  }
}

// HOC that specifies the data requirements of the wrapped component
const RelayContainer = Relay.createContainer(DumbComponent, {
  initialVariables: {
    term: null
  },
  fragments: {
    user: () => Relay.QL`
    fragment on Query {
        search(first: 1, query: $term, type: USER) {
          edges {
            node {
              ... on User {
                id
                login
                avatarURL
                repositories(first:10){
                  edges {
                    cursor
                    node {
                      id,
                      name,
                      description
                    }
                  }
                  pageInfo {
                    hasNextPage
                  }
                }
              }
            }
          }
        }
      }
    `
  }
})

// Relay route that represents the root query and its parameters
class DemoRoute extends Relay.Route {
  static routeName = 'DemoRoute'
  static routeParams = {
    term: null
  }
  static queries = {
    user: (Component, {term}) => Relay.QL`
      query {
        relay {
          ${RelayContainer.getFragment('user', { term })}
        }
      }
    `
  }
}

//  

// Component that renders everything
export default class DemoComponent extends React.Component {
  render() {
    return (
      <Relay.RootContainer
        Component={RelayContainer}
        route={new DemoRoute({term: this.props.login})}
      />
    )
  }
}
