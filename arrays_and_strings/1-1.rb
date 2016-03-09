# Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

# Not written

# def is_unique?(string)
#   return string.split("").uniq.length == string.split("").length
# end

# O(n^2) I believe
# def is_unique?(string)
#   length = string.length
#   for x in 1...length
#     for y in 1...length
#       return false if string[x] == string[y] && x != y
#     end
#   end
#   return true
# end

def is_unique?(string)
  for x in 1...string.length
    for y in (x+1)...string.length
      return false if string[x] == string[y]
    end
  end
  return true
end

p is_unique?("lalalala")
p is_unique?("ay chilbro")