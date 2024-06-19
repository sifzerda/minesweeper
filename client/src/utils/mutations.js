import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser {
    removeUser {
      _id
      username
    }
  }
`;

export const MUTATION_SAVE_MINE_SCORE = gql`
  mutation saveMineScore($userId: ID!, $minePoints: Int!, $mineTimeLeft: Int!) {
    saveMineScore(userId: $userId, minePoints: $minePoints, mineTimeLeft: $mineTimeLeft) {
      _id
      username
      email
      mineScore {
        minePoints
        mineTimeLeft
      }
    }
  }
`;

