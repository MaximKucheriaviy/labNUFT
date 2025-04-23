import nltk;
import random
# nltk.download("movie_reviews")
from nltk.corpus import movie_reviews as mr
print("Кучерявий Максим КН-1-3М лабораторна 2")

#............................. списо відгуків з перемінуванням
revieves = mr.fileids()
random.shuffle(revieves)


#......oб'єднання унікальний слів у файл
# wordslis = []

# for revieve in revieves:
#     words = mr.words(revieve)
#     for word in words:
#         if word not in wordslis:
#             wordslis.append(word.lower())

# file = open("./words.txt", 'w')
# file.write(" ".join(wordslis))



wordslist = []

for revieve in revieves:
    words = mr.words(revieve)
    for word in words:
        wordslist.append(word)


frqList = nltk.probability.FreqDist(wordslist)
wordsFrq = []


file = open("./words.txt")
uniqueWordslist = file.read()
uniqueWordslist = uniqueWordslist.split()

frqList = nltk.probability.FreqDist(wordslist)
wordsFrq = []


for word in uniqueWordslist:
    wordsFrq.append({
        'word': word,
        'frq': frqList[word]
    })

wordsFrq.sort(key=lambda x: (-x['frq']))
print(wordsFrq[:20])





