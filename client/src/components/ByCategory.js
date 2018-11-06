import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import ByCategory from './CategoryCard';

const getCategories = gql`
{
    allCategories{
        name
        articles{
            id
            title
            picture
        }
    }
}
`

export default class ByCategories extends Component {
    render() {
        return <Query query={getCategories}>
            {({ loading, error, data }) => {
                if (error) return <p>{error}</p>
                if (loading || !data) return <p>Loading...</p>
                return <div className="row">
                    {
                        data.allCategories.map((c, i) => {
                            return <ByCategory category={c} key={i} />
                        })
                    }
                </div>

            }}
        </Query>
    }
}