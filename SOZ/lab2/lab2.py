import nltk;
import random
# nltk.download("movie_reviews")
from nltk.corpus import movie_reviews as mr
print("Кучерявий Максим КН-1-3М лабораторна 2")

#............................. списо відгуків з перемінуванням

myWord = "logical"
nCount = 2900
fileName = "pos/cv010_29198.txt"

revieves = mr.fileids()
revWrods = {}

random.shuffle(revieves)

wordslist = []


for revieve in revieves:
    words = mr.words(revieve)
    revWrods[revieve] = words
    for word in words:
        wordslist.append(word)

frqList = nltk.FreqDist(wordslist)

print("20 most commmon: ")
print(frqList.most_common(20))
print('\n')

print("frequency of", myWord, frqList[myWord] )
print('\n')




def isWordInText(wordsList, revName):
    fileWords = set(w.lower() for w in revWrods[revName])
    obj = {}
    for word in wordsList:
        w = word[0].lower()
        obj[w] = w in fileWords
    return obj



nCountWordsList = frqList.most_common(nCount)
usedWords = isWordInText(nCountWordsList, fileName)
trueWords = []



for word in usedWords.keys():
    if usedWords[word] == True:
        trueWords.append(word)

print("most common used words in", fileName)
print(trueWords)
print('\n')




trainModel = []
testSet = []
count = 0

for rev in revieves[:1800]:
    count += 1
    trainModel.append((isWordInText(nCountWordsList, rev), mr.categories(rev)[0]))


print("start of training")
classifier = nltk.classify.NaiveBayesClassifier.train(trainModel)
print("end of training")

for rev in revieves[1800:]:
    count += 1
    testSet.append((isWordInText(nCountWordsList, rev), mr.categories(rev)[0]))


print("accuracy", nltk.classify.accuracy(classifier, testSet))
print(classifier.show_most_informative_features(20))