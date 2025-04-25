import nltk;
import random
# nltk.download("movie_reviews")
from nltk.corpus import movie_reviews as mr
print("Кучерявий Максим КН-1-3М лабораторна 2")

#............................. списо відгуків з перемінуванням
revieves = mr.fileids()
random.shuffle(revieves)

myWord = "logical"
nCount = 2900
fileName = "pos/cv010_29198.txt"


wordslist = []


for revieve in revieves:
    words = mr.words(revieve)
    for word in words:
        wordslist.append(word)

frqList = nltk.FreqDist(wordslist)

print("20 most commmon: ")
print(frqList.most_common(20))
print('\n')

print("frequency of", myWord, frqList[myWord] )
print('\n')

nCountWordsList = frqList.most_common(nCount)


def isWordInText(wordsList, revName):
    fileWords = mr.words(revName)
    obj = {}
    for word in wordsList:
        obj[word[0]] = word[0] in fileWords
    return obj





usedWords = isWordInText(nCountWordsList, fileName)

trueWords = []

for word in usedWords.keys():
    if usedWords[word] == True:
        trueWords.append(word)


print(trueWords)
print(len(trueWords))