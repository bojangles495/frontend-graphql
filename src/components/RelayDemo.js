import React from 'react'
import Relay from 'react-relay'
import { Link } from 'react-router'

// Normal React Component that renders the the data passed by the Relay Container
class DumbComponent extends React.Component {
  render() {
    return (
      <div>
        <h3>GraphQL Demo Search Results:</h3>
        <ul>
          {
            this.props.query.search.edges.map(({node}) => {
              return (
                <li key={node.id}>
                  <img alt={node.login} src={node.avatarURL} width={20} height={20} />
                  <Link to={`/${node.login}`}>{node.login}</Link>
                </li>
              )
            })
          }
        </ul>
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
    query: () => Relay.QL`
      fragment on Query {
        search(first: 25, query: $term, type: USER) {
          edges {
            node {
              ... on User {
                id
                login
                avatarURL
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
    query: (Component, {term}) => Relay.QL`
      query {
        relay {
          ${RelayContainer.getFragment('query', { term })}
        }
      }
    `
  }
}

// Component that renders everything
export default class DemoComponent extends React.Component {
  render() {
    return (
      <Relay.RootContainer
        Component={RelayContainer}
        route={new DemoRoute({term: "change the world"})}
      />
    )
  }
}

