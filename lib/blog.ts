interface BlogMeta {
  id: string | number;
  picture: string;
  title: string;
  content: string;
  readtime: string;
  ipfsHash: string;
}

export const BlogData: BlogMeta[] = [
  {
    id: 0,
    picture:
      'https://ipfs.io/ipfs/QmQut8YwAAxk3vzYGVvGR8oR1VmC6NfivVkq7adkQnM9xG',
    title: 'Introducing LIFTOFF & Crash Insurance',
    content:
      'LID Protocol has always been at the forefront of the presale fundraising and liquidity locking curve. With the imminent release of LIFTOFF, this same pattern continues today, and in to the future.',
    ipfsHash: 'QmZVnffVQUstj4z517HtQ724YCEnSu9QDFXzgroqLW77ea',
    readtime: 'Jan 2nd 15 min read',
  }
];
