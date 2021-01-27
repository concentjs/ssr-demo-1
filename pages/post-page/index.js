/** @typedef {import('../types/store').CtxM<{}, 'test'>} Ctx */
import React from 'react'
import { useConcent, setState, getState } from 'concent'
import router from 'next/router'

const delay = () => new Promise(r => setTimeout(r, 2000))

// use next/router to do browser side router jump
function toHomePage() {
  router.push('/');
}

// 此函数在构建时被调用
// export async function getStaticProps() {
//   console.log('getStaticProps');
//   // 调用外部 API 获取博文列表
//   await delay();
//   const posts = [
//     { id: 1, name: 'post1 -----' },
//     { id: 2, name: 'post2 --- welcome to use concent' },
//   ];

//   // 这个返回对象会透传给 根组件的pageProps，在那里将状态记录到store
//   return {
//     props: {
//       module: 'test',
//       state: { posts },
//     }
//   };
// }

export function getServerSideProps() {
  console.log('getServerSideProps');
  const posts = [
    { id: 1, name: 'post1 -----' },
    { id: 2, name: 'post2 --- welcome to use concent' },
  ];
  return {
    props: {
      module: 'test',
      state: { posts },
    }
  };
}


const PostList = React.memo(function () {
  /** @type Ctx */
  const { state } = useConcent('test');
  return (
    <div>
      {state.posts.map(item => <h3 key={item.id}>{item.name}</h3>)}
    </div>
  );
});

const PostLength = React.memo(function () {
  /** @type Ctx */
  const { state } = useConcent('test');
  return <h1>{state.posts.length}</h1>;
});

export default function PostPage() {
  return (
    <div>
      <h1>this is post page</h1>
      <PostList />
      <PostLength />
      <button onClick={toHomePage}>to home page</button>
    </div>
  );
}
