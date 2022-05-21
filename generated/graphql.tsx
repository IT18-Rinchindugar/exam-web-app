import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type Credentials = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** columns and relationships of "Exam" */
export type Exam = {
  __typename?: 'Exam';
  code: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  /** An object relationship */
  test: Test;
  /** An array relationship */
  testUsers: Array<TestUser>;
  /** An aggregate relationship */
  testUsers_aggregate: TestUser_Aggregate;
  test_id: Scalars['uuid'];
  /** An object relationship */
  user: User;
};


/** columns and relationships of "Exam" */
export type ExamTestUsersArgs = {
  distinct_on?: InputMaybe<Array<TestUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestUser_Order_By>>;
  where?: InputMaybe<TestUser_Bool_Exp>;
};


/** columns and relationships of "Exam" */
export type ExamTestUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TestUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestUser_Order_By>>;
  where?: InputMaybe<TestUser_Bool_Exp>;
};

/** order by aggregate values of table "Exam" */
export type Exam_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exam_Max_Order_By>;
  min?: InputMaybe<Exam_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "Exam". All fields are combined with a logical 'AND'. */
export type Exam_Bool_Exp = {
  _and?: InputMaybe<Array<Exam_Bool_Exp>>;
  _not?: InputMaybe<Exam_Bool_Exp>;
  _or?: InputMaybe<Array<Exam_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  test?: InputMaybe<Test_Bool_Exp>;
  testUsers?: InputMaybe<TestUser_Bool_Exp>;
  test_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
};

/** order by max() on columns of table "Exam" */
export type Exam_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  test_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Exam" */
export type Exam_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  test_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Exam". */
export type Exam_Order_By = {
  code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  test?: InputMaybe<Test_Order_By>;
  testUsers_aggregate?: InputMaybe<TestUser_Aggregate_Order_By>;
  test_id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
};

/** select columns of table "Exam" */
export enum Exam_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  TestId = 'test_id'
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginObject = {
  __typename?: 'LoginObject';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

/** columns and relationships of "Question" */
export type Question = {
  __typename?: 'Question';
  /** An object relationship */
  test: Test;
};

/** aggregated selection of "Question" */
export type Question_Aggregate = {
  __typename?: 'Question_aggregate';
  aggregate?: Maybe<Question_Aggregate_Fields>;
  nodes: Array<Question>;
};

/** aggregate fields of "Question" */
export type Question_Aggregate_Fields = {
  __typename?: 'Question_aggregate_fields';
  count: Scalars['Int'];
};


/** aggregate fields of "Question" */
export type Question_Aggregate_FieldsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Question" */
export type Question_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Question". All fields are combined with a logical 'AND'. */
export type Question_Bool_Exp = {
  _and?: InputMaybe<Array<Question_Bool_Exp>>;
  _not?: InputMaybe<Question_Bool_Exp>;
  _or?: InputMaybe<Array<Question_Bool_Exp>>;
  test?: InputMaybe<Test_Bool_Exp>;
};

/** Ordering options when selecting data from "Question". */
export type Question_Order_By = {
  test?: InputMaybe<Test_Order_By>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Test" */
export type Test = {
  __typename?: 'Test';
  /** An array relationship */
  exams: Array<Exam>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  questionNumber: Scalars['Int'];
  /** An array relationship */
  questions: Array<Question>;
  /** An aggregate relationship */
  questions_aggregate: Question_Aggregate;
  /** An object relationship */
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "Test" */
export type TestExamsArgs = {
  distinct_on?: InputMaybe<Array<Exam_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exam_Order_By>>;
  where?: InputMaybe<Exam_Bool_Exp>;
};


/** columns and relationships of "Test" */
export type TestQuestionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


/** columns and relationships of "Test" */
export type TestQuestions_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};

/** columns and relationships of "TestUser" */
export type TestUser = {
  __typename?: 'TestUser';
  /** An object relationship */
  exam: Exam;
  exam_id: Scalars['uuid'];
  id: Scalars['uuid'];
  last_seen?: Maybe<Scalars['timestamp']>;
  name: Scalars['String'];
};

/** aggregated selection of "TestUser" */
export type TestUser_Aggregate = {
  __typename?: 'TestUser_aggregate';
  aggregate?: Maybe<TestUser_Aggregate_Fields>;
  nodes: Array<TestUser>;
};

/** aggregate fields of "TestUser" */
export type TestUser_Aggregate_Fields = {
  __typename?: 'TestUser_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TestUser_Max_Fields>;
  min?: Maybe<TestUser_Min_Fields>;
};


/** aggregate fields of "TestUser" */
export type TestUser_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TestUser_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "TestUser" */
export type TestUser_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<TestUser_Max_Order_By>;
  min?: InputMaybe<TestUser_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "TestUser". All fields are combined with a logical 'AND'. */
export type TestUser_Bool_Exp = {
  _and?: InputMaybe<Array<TestUser_Bool_Exp>>;
  _not?: InputMaybe<TestUser_Bool_Exp>;
  _or?: InputMaybe<Array<TestUser_Bool_Exp>>;
  exam?: InputMaybe<Exam_Bool_Exp>;
  exam_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamp_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "TestUser" */
export enum TestUser_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'User_pkey'
}

/** input type for inserting data into table "TestUser" */
export type TestUser_Insert_Input = {
  exam_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TestUser_Max_Fields = {
  __typename?: 'TestUser_max_fields';
  exam_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  last_seen?: Maybe<Scalars['timestamp']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "TestUser" */
export type TestUser_Max_Order_By = {
  exam_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type TestUser_Min_Fields = {
  __typename?: 'TestUser_min_fields';
  exam_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  last_seen?: Maybe<Scalars['timestamp']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "TestUser" */
export type TestUser_Min_Order_By = {
  exam_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "TestUser" */
export type TestUser_Mutation_Response = {
  __typename?: 'TestUser_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TestUser>;
};

/** on_conflict condition type for table "TestUser" */
export type TestUser_On_Conflict = {
  constraint: TestUser_Constraint;
  update_columns?: Array<TestUser_Update_Column>;
  where?: InputMaybe<TestUser_Bool_Exp>;
};

/** Ordering options when selecting data from "TestUser". */
export type TestUser_Order_By = {
  exam?: InputMaybe<Exam_Order_By>;
  exam_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: TestUser */
export type TestUser_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "TestUser" */
export enum TestUser_Select_Column {
  /** column name */
  ExamId = 'exam_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "TestUser" */
export type TestUser_Set_Input = {
  last_seen?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "TestUser" */
export enum TestUser_Update_Column {
  /** column name */
  LastSeen = 'last_seen'
}

/** order by aggregate values of table "Test" */
export type Test_Aggregate_Order_By = {
  avg?: InputMaybe<Test_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Test_Max_Order_By>;
  min?: InputMaybe<Test_Min_Order_By>;
  stddev?: InputMaybe<Test_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Test_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Test_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Test_Sum_Order_By>;
  var_pop?: InputMaybe<Test_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Test_Var_Samp_Order_By>;
  variance?: InputMaybe<Test_Variance_Order_By>;
};

/** order by avg() on columns of table "Test" */
export type Test_Avg_Order_By = {
  questionNumber?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Test". All fields are combined with a logical 'AND'. */
export type Test_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Bool_Exp>>;
  _not?: InputMaybe<Test_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Bool_Exp>>;
  exams?: InputMaybe<Exam_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  questionNumber?: InputMaybe<Int_Comparison_Exp>;
  questions?: InputMaybe<Question_Bool_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "Test" */
export type Test_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  questionNumber?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Test" */
export type Test_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  questionNumber?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Test". */
export type Test_Order_By = {
  exams_aggregate?: InputMaybe<Exam_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  questionNumber?: InputMaybe<Order_By>;
  questions_aggregate?: InputMaybe<Question_Aggregate_Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "Test" */
export enum Test_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  QuestionNumber = 'questionNumber',
  /** column name */
  UserId = 'user_id'
}

/** order by stddev() on columns of table "Test" */
export type Test_Stddev_Order_By = {
  questionNumber?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Test" */
export type Test_Stddev_Pop_Order_By = {
  questionNumber?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Test" */
export type Test_Stddev_Samp_Order_By = {
  questionNumber?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "Test" */
export type Test_Sum_Order_By = {
  questionNumber?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "Test" */
export type Test_Var_Pop_Order_By = {
  questionNumber?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Test" */
export type Test_Var_Samp_Order_By = {
  questionNumber?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Test" */
export type Test_Variance_Order_By = {
  questionNumber?: InputMaybe<Order_By>;
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  /** An array relationship */
  exams: Array<Exam>;
  firstname: Scalars['String'];
  id: Scalars['uuid'];
  lastname: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  /** An array relationship */
  tests: Array<Test>;
  updated_at: Scalars['timestamptz'];
  verified?: Maybe<Scalars['Boolean']>;
};


/** columns and relationships of "User" */
export type UserExamsArgs = {
  distinct_on?: InputMaybe<Array<Exam_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exam_Order_By>>;
  where?: InputMaybe<Exam_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserTestsArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  exams?: InputMaybe<Exam_Bool_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  tests?: InputMaybe<Test_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  exams_aggregate?: InputMaybe<Exam_Aggregate_Order_By>;
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  tests_aggregate?: InputMaybe<Test_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Verified = 'verified'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** insert data into the table: "TestUser" */
  insert_TestUser?: Maybe<TestUser_Mutation_Response>;
  /** insert a single row into the table: "TestUser" */
  insert_TestUser_one?: Maybe<TestUser>;
  /** login */
  login?: Maybe<LoginObject>;
  /** update data of the table: "TestUser" */
  update_TestUser?: Maybe<TestUser_Mutation_Response>;
  /** update single row of the table: "TestUser" */
  update_TestUser_by_pk?: Maybe<TestUser>;
};


/** mutation root */
export type Mutation_RootInsert_TestUserArgs = {
  objects: Array<TestUser_Insert_Input>;
  on_conflict?: InputMaybe<TestUser_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TestUser_OneArgs = {
  object: TestUser_Insert_Input;
  on_conflict?: InputMaybe<TestUser_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  credentials: Credentials;
};


/** mutation root */
export type Mutation_RootUpdate_TestUserArgs = {
  _set?: InputMaybe<TestUser_Set_Input>;
  where: TestUser_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TestUser_By_PkArgs = {
  _set?: InputMaybe<TestUser_Set_Input>;
  pk_columns: TestUser_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Exam" */
  Exam: Array<Exam>;
  /** fetch data from the table: "Exam" using primary key columns */
  Exam_by_pk?: Maybe<Exam>;
  /** fetch data from the table: "Question" */
  Question: Array<Question>;
  /** fetch aggregated fields from the table: "Question" */
  Question_aggregate: Question_Aggregate;
  /** fetch data from the table: "Test" */
  Test: Array<Test>;
  /** fetch data from the table: "TestUser" */
  TestUser: Array<TestUser>;
  /** fetch aggregated fields from the table: "TestUser" */
  TestUser_aggregate: TestUser_Aggregate;
  /** fetch data from the table: "TestUser" using primary key columns */
  TestUser_by_pk?: Maybe<TestUser>;
  /** fetch data from the table: "Test" using primary key columns */
  Test_by_pk?: Maybe<Test>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


export type Query_RootExamArgs = {
  distinct_on?: InputMaybe<Array<Exam_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exam_Order_By>>;
  where?: InputMaybe<Exam_Bool_Exp>;
};


export type Query_RootExam_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootQuestionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Query_RootQuestion_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Query_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Query_RootTestUserArgs = {
  distinct_on?: InputMaybe<Array<TestUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestUser_Order_By>>;
  where?: InputMaybe<TestUser_Bool_Exp>;
};


export type Query_RootTestUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TestUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestUser_Order_By>>;
  where?: InputMaybe<TestUser_Bool_Exp>;
};


export type Query_RootTestUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTest_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Exam" */
  Exam: Array<Exam>;
  /** fetch data from the table: "Exam" using primary key columns */
  Exam_by_pk?: Maybe<Exam>;
  /** fetch data from the table: "Question" */
  Question: Array<Question>;
  /** fetch aggregated fields from the table: "Question" */
  Question_aggregate: Question_Aggregate;
  /** fetch data from the table: "Test" */
  Test: Array<Test>;
  /** fetch data from the table: "TestUser" */
  TestUser: Array<TestUser>;
  /** fetch aggregated fields from the table: "TestUser" */
  TestUser_aggregate: TestUser_Aggregate;
  /** fetch data from the table: "TestUser" using primary key columns */
  TestUser_by_pk?: Maybe<TestUser>;
  /** fetch data from the table: "Test" using primary key columns */
  Test_by_pk?: Maybe<Test>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


export type Subscription_RootExamArgs = {
  distinct_on?: InputMaybe<Array<Exam_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exam_Order_By>>;
  where?: InputMaybe<Exam_Bool_Exp>;
};


export type Subscription_RootExam_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootQuestionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Subscription_RootQuestion_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Subscription_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Subscription_RootTestUserArgs = {
  distinct_on?: InputMaybe<Array<TestUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestUser_Order_By>>;
  where?: InputMaybe<TestUser_Bool_Exp>;
};


export type Subscription_RootTestUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TestUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestUser_Order_By>>;
  where?: InputMaybe<TestUser_Bool_Exp>;
};


export type Subscription_RootTestUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTest_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type CheckPublishedExamQueryVariables = Exact<{
  enterCode: Scalars['String'];
}>;


export type CheckPublishedExamQuery = { __typename?: 'query_root', Exam: Array<{ __typename?: 'Exam', id: any }> };

export type GetExamByPkSubscriptionVariables = Exact<{
  examId: Scalars['uuid'];
}>;


export type GetExamByPkSubscription = { __typename?: 'subscription_root', Exam_by_pk?: { __typename?: 'Exam', status?: string | null, name: string, test_id: any } | null };

export type InsertTestUserOneMutationVariables = Exact<{
  examId?: InputMaybe<Scalars['uuid']>;
  name: Scalars['String'];
}>;


export type InsertTestUserOneMutation = { __typename?: 'mutation_root', insert_TestUser_one?: { __typename?: 'TestUser', id: any, last_seen?: any | null, name: string, exam_id: any } | null };

export type GetTestUserByExamIdSubscriptionVariables = Exact<{
  examId: Scalars['uuid'];
}>;


export type GetTestUserByExamIdSubscription = { __typename?: 'subscription_root', TestUser: Array<{ __typename?: 'TestUser', name: string }> };

export type GetTestUserByPkQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetTestUserByPkQuery = { __typename?: 'query_root', TestUser_by_pk?: { __typename?: 'TestUser', last_seen?: any | null, name: string, exam: { __typename?: 'Exam', status?: string | null } } | null };


export const CheckPublishedExamDocument = gql`
    query checkPublishedExam($enterCode: String!) {
  Exam(where: {code: {_eq: $enterCode}}) {
    id
  }
}
    `;

/**
 * __useCheckPublishedExamQuery__
 *
 * To run a query within a React component, call `useCheckPublishedExamQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckPublishedExamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckPublishedExamQuery({
 *   variables: {
 *      enterCode: // value for 'enterCode'
 *   },
 * });
 */
export function useCheckPublishedExamQuery(baseOptions: Apollo.QueryHookOptions<CheckPublishedExamQuery, CheckPublishedExamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckPublishedExamQuery, CheckPublishedExamQueryVariables>(CheckPublishedExamDocument, options);
      }
export function useCheckPublishedExamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckPublishedExamQuery, CheckPublishedExamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckPublishedExamQuery, CheckPublishedExamQueryVariables>(CheckPublishedExamDocument, options);
        }
export type CheckPublishedExamQueryHookResult = ReturnType<typeof useCheckPublishedExamQuery>;
export type CheckPublishedExamLazyQueryHookResult = ReturnType<typeof useCheckPublishedExamLazyQuery>;
export type CheckPublishedExamQueryResult = Apollo.QueryResult<CheckPublishedExamQuery, CheckPublishedExamQueryVariables>;
export const GetExamByPkDocument = gql`
    subscription getExamByPk($examId: uuid!) {
  Exam_by_pk(id: $examId) {
    status
    name
    test_id
  }
}
    `;

/**
 * __useGetExamByPkSubscription__
 *
 * To run a query within a React component, call `useGetExamByPkSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetExamByPkSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExamByPkSubscription({
 *   variables: {
 *      examId: // value for 'examId'
 *   },
 * });
 */
export function useGetExamByPkSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetExamByPkSubscription, GetExamByPkSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetExamByPkSubscription, GetExamByPkSubscriptionVariables>(GetExamByPkDocument, options);
      }
export type GetExamByPkSubscriptionHookResult = ReturnType<typeof useGetExamByPkSubscription>;
export type GetExamByPkSubscriptionResult = Apollo.SubscriptionResult<GetExamByPkSubscription>;
export const InsertTestUserOneDocument = gql`
    mutation insertTestUserOne($examId: uuid, $name: String!) {
  insert_TestUser_one(object: {exam_id: $examId, name: $name}) {
    id
    last_seen
    name
    exam_id
  }
}
    `;
export type InsertTestUserOneMutationFn = Apollo.MutationFunction<InsertTestUserOneMutation, InsertTestUserOneMutationVariables>;

/**
 * __useInsertTestUserOneMutation__
 *
 * To run a mutation, you first call `useInsertTestUserOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTestUserOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTestUserOneMutation, { data, loading, error }] = useInsertTestUserOneMutation({
 *   variables: {
 *      examId: // value for 'examId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useInsertTestUserOneMutation(baseOptions?: Apollo.MutationHookOptions<InsertTestUserOneMutation, InsertTestUserOneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertTestUserOneMutation, InsertTestUserOneMutationVariables>(InsertTestUserOneDocument, options);
      }
export type InsertTestUserOneMutationHookResult = ReturnType<typeof useInsertTestUserOneMutation>;
export type InsertTestUserOneMutationResult = Apollo.MutationResult<InsertTestUserOneMutation>;
export type InsertTestUserOneMutationOptions = Apollo.BaseMutationOptions<InsertTestUserOneMutation, InsertTestUserOneMutationVariables>;
export const GetTestUserByExamIdDocument = gql`
    subscription GetTestUserByExamId($examId: uuid!) {
  TestUser(where: {exam_id: {_eq: $examId}}) {
    name
  }
}
    `;

/**
 * __useGetTestUserByExamIdSubscription__
 *
 * To run a query within a React component, call `useGetTestUserByExamIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetTestUserByExamIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestUserByExamIdSubscription({
 *   variables: {
 *      examId: // value for 'examId'
 *   },
 * });
 */
export function useGetTestUserByExamIdSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetTestUserByExamIdSubscription, GetTestUserByExamIdSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetTestUserByExamIdSubscription, GetTestUserByExamIdSubscriptionVariables>(GetTestUserByExamIdDocument, options);
      }
export type GetTestUserByExamIdSubscriptionHookResult = ReturnType<typeof useGetTestUserByExamIdSubscription>;
export type GetTestUserByExamIdSubscriptionResult = Apollo.SubscriptionResult<GetTestUserByExamIdSubscription>;
export const GetTestUserByPkDocument = gql`
    query getTestUserByPk($userId: uuid!) {
  TestUser_by_pk(id: $userId) {
    exam {
      status
    }
    last_seen
    name
  }
}
    `;

/**
 * __useGetTestUserByPkQuery__
 *
 * To run a query within a React component, call `useGetTestUserByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTestUserByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestUserByPkQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetTestUserByPkQuery(baseOptions: Apollo.QueryHookOptions<GetTestUserByPkQuery, GetTestUserByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTestUserByPkQuery, GetTestUserByPkQueryVariables>(GetTestUserByPkDocument, options);
      }
export function useGetTestUserByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTestUserByPkQuery, GetTestUserByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTestUserByPkQuery, GetTestUserByPkQueryVariables>(GetTestUserByPkDocument, options);
        }
export type GetTestUserByPkQueryHookResult = ReturnType<typeof useGetTestUserByPkQuery>;
export type GetTestUserByPkLazyQueryHookResult = ReturnType<typeof useGetTestUserByPkLazyQuery>;
export type GetTestUserByPkQueryResult = Apollo.QueryResult<GetTestUserByPkQuery, GetTestUserByPkQueryVariables>;