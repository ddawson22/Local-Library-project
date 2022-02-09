function findAccountById(accounts, id) {
for (let account of accounts){
  if(account.id === id){
    return account
  }
}
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account,next)=>account.name.last.toLowerCase()<next.name.last.toLowerCase()?-1:1)
}


function getTotalNumberOfBorrows(account, books) {
  return (totalBorrows(account, books)).length;

function totalBorrows(account,books){
    return books.filter(book=>{
      for(let copy of book.borrows){
        if(copy.id === account.id){
          return book
        }
      }
    })
}
}



function getBooksPossessedByAccount({ id }, books, authors) {
  return books.reduce((acc, book) =>{
    book.borrows[0].id === id && !book.borrows[0].returned
    ? acc.push({...book, author: authors.find((auth) => auth.id === book.authorId) })
    : null;
    return acc;

  }, []);
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
