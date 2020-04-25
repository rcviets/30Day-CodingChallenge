/*Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?*/

var LRUCache = function(capacity) 
{
        const Node = function(key,val)
        {
                this.key = key;
                this.val = val;
        };
        
        /* Set up the data structure. */
        var count = 0;
        var map = new Map();
        var head = new Node(-1,'H'), tail = new Node(-1,'T');
        head.next = tail;
        tail.prev = head;
        head.prev = tail.next = null;

        const addToHead = function(node)
        {
                node.next = head.next;
                node.prev = head;
                head.next.prev = node;
                head.next = node;
        };
        const removeFromCache = function(node)
        {
                node.next.prev = node.prev;
                node.prev.next = node.next;
        };
        
        return {
                /** 
                 * @param {number} key
                 * @return {number}
                 */
                get:function(key)
                {
                        /* Look it up in the hash table. */
                        var node = map.get(key);
                        if(!node)
                                return -1;
                        
                        /* Put it on the MRU side of the cache. */
                        if(head.next !== node)
                        {
                                removeFromCache(node);
                                addToHead(node);
                        }
                        return node.val;
                },
                put:function(key, value)
                {
                        /* Look it up in the hash table. */
                        var node = map.get(key);
                        if(!node)
                        {
                                node = new Node(key, value);
                                map.set(node.key,node);
                                /* Add it to the cache. */
                                if(count == capacity)
                                {
                                        map.set(tail.prev.key,null);
                                        removeFromCache(tail.prev);
                                }
                                else
                                        count++;
                                addToHead(node);
                        }
                        else
                        {
                                node.val = value;
                                if(head.next !== node)
                                {
                                        removeFromCache(node);
                                        addToHead(node);
                                }
                        }
                }
        };
};